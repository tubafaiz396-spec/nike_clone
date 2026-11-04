import { CatalogPage } from "./Products";
import { kidsProducts } from "../data/products";
export default function Kids() { return <CatalogPage eyebrow="Kids' collection" title="Small feet. Big energy." description="Comfortable, easy-to-wear styles made for their next adventure." products={kidsProducts} />; }
