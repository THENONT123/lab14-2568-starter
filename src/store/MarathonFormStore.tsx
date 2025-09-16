import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  haveCoupon: false,
  couponCode: "",
  password: "",
  cfpassword: "",
  total: 0,
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  sethaveCoupon: (_havecoupon) => 
    set(() => ({
      haveCoupon: _havecoupon,
    })),
  setCouponCode: (_code) =>
    set(() => ({
      couponCode: _code,
    })),
  setPassword: (_password) =>
    set(() => ({        
      password: _password,
    })),
  setCfPassword: (_cfpassword) =>
    set(() => ({
      cfpassword: _cfpassword,
    })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCoupon: () =>
    set((state) => {
      let totalPayment = 0;
      if (state.plan === "funrun") totalPayment += 500;
      if (state.plan === "mini") totalPayment += 800;
      if (state.plan === "half") totalPayment += 1200;
      if (state.plan === "full") totalPayment += 1500;

      if(state.couponCode === "CMU2025" && state.haveCoupon) totalPayment *= 0.7;

      return {total: totalPayment};
    }),
  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
    }),
}));