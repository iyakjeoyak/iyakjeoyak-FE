const queryKeys = {
	Medicines: () => ["medicines"],
	ReviewsById: (id: number) => ["reviews", id],
};

export default queryKeys;
