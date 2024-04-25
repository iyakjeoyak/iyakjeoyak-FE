const queryKeys = {
	Medicines: () => ["medicines"],
	ReviewsById: (id: number) => ["reviews", id],
	SignUp: () => ["signUp"],
};

export default queryKeys;
