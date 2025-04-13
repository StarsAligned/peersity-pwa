import type AuthUser from "../models/user";

export default async function getCurrentUser(): Promise<AuthUser | null> {
	const response = await fetch("http://localhost:10402/portal/user/me", {
		credentials: "include",
		cache: "no-store",
	});

	if (!response.ok) {
		throw new Error("Failed to fetch user");
	}

	const userCurrent: AuthUser = await response.json();

	if (!userCurrent || userCurrent.code === "") {
		return null;
	}

	return userCurrent;
}