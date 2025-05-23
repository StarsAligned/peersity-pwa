"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeButton() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<select id="theme-button" value={theme} onChange={(e) => setTheme(e.target.value)}>
			<option value="system">System</option>
			<option value="dark">Dark</option>
			<option value="light">Light</option>
		</select>
	)
}