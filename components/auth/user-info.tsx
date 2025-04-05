"use client";

import { useEffect, useState } from "react";
import getCurrentUser from "@/lib/auth/functions/user";
import type UserInfo from "@/lib/auth/models/user";

export default function UserInfo() {
	const [user, setUser] = useState<UserInfo | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchUser() {
			try {
				const currentUser = await getCurrentUser();
				setUser(currentUser);
			} catch (error) {
				console.error("Error fetching user", error);
			}
			setLoading(false);
		}
		fetchUser();
	}, []);

	if (loading) {
		return <div>Loading user...</div>;
	}

	return <div>User: {user?.name}</div>;
}