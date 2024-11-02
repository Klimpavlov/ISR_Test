import Link from "next/link";
import {Sidebar} from "@/components/ui/Sidebar";
import {Card, CardContent} from "@/components/ui/card";

interface Product {
    id: string;
    name: string;
    description: string;
}

export const revalidate = 60;

export default async function Home() {
    const res = await fetch('http://localhost:3001/products');
    const products: Product[] = await res.json();

    return (
        <div className='flex'>
            <Sidebar />
            <main className="flex-grow p-8">
                <h1 className="text-2xl font-bold mb-8">Product List</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Card key={product.id} className="border border-gray-200 flex flex-col justify-between h-full">
                            <CardContent className="flex flex-col justify-between h-full p-4">
                                <div className='flex-1'>
                                    <Link href={`/products/${product.id}`} className="text-lg font-semibold">{product.name}</Link>
                                    <p className='text-sm text-gray-600'>{product.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
