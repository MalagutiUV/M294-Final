const address = "https://react-vid-app.vercel.app/api";

export const ApiGet = async (request: string) => {
	try {
		const response = await fetch(address + "/" + request, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
			},
		});

		if (!response.ok) {
			console.error("Network response was not ok");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

export const ApiPost = async (
	data: object,
	request: string,
	isLogin: boolean = false
) => {
	try {
		const response = await fetch(address + "/" + request, {
			method: "POST",
			headers: isLogin
				? {}
				: {
						Authorization: `Bearer ${localStorage.getItem(
							"auth_token"
						)}`,
				  },
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			console.error("Network response was not ok");
		}

		return await response.json();
	} catch (error) {
		console.error("Error posting data:", error);
	}
};

export const ApiDelete = async (request: string) => {
	try {
		const response = await fetch(address + "/" + request, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
			},
		});

		if (!response.ok) {
			console.error("Network response was not ok");
		}

		return await response.json();
	} catch (error) {
		console.error("Error deleting data:", error);
	}
};

export const ApiPut = async (data: object, request: string) => {
	try {
		const response = await fetch(address + "/" + request, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			console.error("Network response was not ok");
		}

		return await response.json();
	} catch (error) {
		console.error("Error updating data:", error);
	}
};
