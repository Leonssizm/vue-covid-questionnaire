import { defineRule } from "vee-validate";
import { required } from "@vee-validate/rules";

defineRule('required', required)
defineRule("name", (value) => {
  if (!value || !value.length || value.length < 3) {
    return 'სახელი უნდა შედგებოდეს მინიმუმ სამი სიმბოლოსგან';
  }
  else if(value.length > 255){
    return 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'
  }
  else if(!/^[ა-ჰ]+$/.test(value)){
    return 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს'
  }
  return true;
});

defineRule("lastName", (value) => {
  if (!value || !value.length || value.length < 3) {
    return 'გვარი უნდა შედგებოდეს მინიმუმ სამი სიმბოლოსგან';
  }
  else if(value.length > 255){
    return 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან'
  }
  else if(!/^[ა-ჰ]+$/.test(value)){
    return 'გვარის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს'
  }
  return true;
});

defineRule('redberry_email', (value) => {
  if(!value || !value.length ){
    return 'ელ-ფოსტა სავალდებულოა'
  }
  else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)){
    return 'თქვენს მიერ შეყვანილი მეილი არასწორია'
  }
  else if(!/^[a-zA-Z0-9+_.-]+@redberry.ge$/.test(value)){
    return 'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)'
  }
  
  return true;
})
