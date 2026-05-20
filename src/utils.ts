export const calculateDiscountedPrice = (price: number, percentage: number) => {
    return price * (percentage / 100);
};
