// api.ts

export async function createCustomer(customer: any) {
    const response = await fetch("https://api.example.com/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    });

    return response.json();
}