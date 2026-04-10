export function SearchBar({ search, setSearch }) {
    return (
        <form>
            <input
                type="text"
                placeholder="Buscar produto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
}