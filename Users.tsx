// AI generated code

function Users() {
    const [users, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch("/api/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setFiltered(data);
            });
    }, []);

    useEffect(() => {
        setFiltered(
            users.filter(x =>
                x.name.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query]);

    return (
        <>
            <input
                value={query}
                onChange={e => setQuery(e.target.value)}
            />

            {filtered.map(user => (
                <div>{user.name}</div>
            ))}
        </>
    );
}

function TestJinay() {
  return "We are testing Jinay's branch"
}

function TestNishtha() {
  return "We are testing Nishtha's branch"
}
