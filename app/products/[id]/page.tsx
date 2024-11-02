import {Sidebar} from "@/components/ui/Sidebar";
import {Card, CardContent} from "@/components/ui/card";

interface Product {
    id: string;
    name: string;
    description: string;
}

export const revalidate = 60;

export async function generateStaticParams() {
    const res = await fetch('http://localhost:3001/products');
    const products: Product[] = await res.json();

    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({params}: { params: { id: string } }) {
    const res = await fetch(`http://localhost:3001/products/${params.id}`)
    const product = await res.json();

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='flex'>
            <Sidebar/>
            <div className='p-8'>

                <Card key={product.id} className="border border-gray-200 flex flex-col md:flex-row justify-between">
                    <CardContent className="flex items-center space-x-3">
                        <div className='pt-5 '>
                            <p className='text-sm font-semibold'>{product.name}</p>
                            <p className='text-sm'>{product.description}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}