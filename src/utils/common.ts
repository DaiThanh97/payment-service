const calculateMoneyRatio = (money: number, ratio: number): number => {
  return parseFloat((money * ratio).toFixed(2));
}

export default {
  calculateMoneyRatio
}