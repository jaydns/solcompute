use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, pubkey::Pubkey,
    program_error::ProgramError, program_pack::Pack, msg, sysvar::{rent::Rent, Sysvar},
    program::invoke,
    system_instruction,
};

#[repr(C)]
pub struct ComputeBooking {
    is_booked: bool,
    hours: u8,
    user: Pubkey,
    amount_paid: u64, // in lamports
};

const SOL_PER_HOUR: u64 = 824_610; // in lamports

entrypoint!(process_instruction);
fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let account = &mut accounts[0].try_borrow_mut_data()?;
    let mut booking_info = ComputeBooking::unpack_unchecked(&account)?;

    if booking_info.is_booked {
        msg!("already booked");
        return Err(ProgramError::InvalidInstructionData);
    }

    let required_amount = SOL_PER_HOUR * _instruction_data[0] as u64;
    if accounts[1].lamports()? < required_amount {
        msg!("insufficient payment");
        return Err(ProgramError::InsufficientFunds);
    }

    invoke(
        &system_instruction::transfer(accounts[1].key, accounts[0].key, required_amount),
        &[
            accounts[1].clone(),
            accounts[0].clone(),
            accounts[2].clone(),
        ],
    )?;

    booking_info.is_booked = true;
    booking_info.hours = _instruction_data[0];
    booking_info.user = *accounts[1].key;
    booking_info.amount_paid = required_amount;

    ComputeBooking::pack(booking_info, &mut account)?;
    msg!("successfully booked");
    Ok(())
}