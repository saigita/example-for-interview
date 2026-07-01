// CustomerPage.tsx

const handleSubmit = async () => {
    setLoading(true);

    const result = await createCustomer(customer);

    alert("Customer Created!");

    setLoading(false);
};