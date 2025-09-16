import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  haveCoupon: boolean;
  couponCode: string;
  password: string;
  cfpassword: string;
  total: number;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  sethaveCoupon: (v: boolean) => void;
  setCouponCode: (v: string) => void;
  setPassword: (v: string) => void;
  setCfPassword: (v: string) => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCoupon: () => void;
  reset: () => void;
}
export type { MarathonFormState }