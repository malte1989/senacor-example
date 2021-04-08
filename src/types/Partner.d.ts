import { Address } from "@/types/Address";
import { BankAccount } from "@/types/BankAccount";

export interface Partner {
  id: number;
  email: string;
  address: Address;
  bankAccount: BankAccount;
}
