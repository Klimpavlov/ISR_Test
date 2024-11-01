// products/[id]/page.tsx
import { useRouter } from 'next/router';
import products from '../../data/products.json';

interface Product {
    id: string;
    name: string;
    description: string;
}

export const revalidate = 60

export const dynamicParams = true

// Функция для генерации статических параметров
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

// Компонент страницы продукта
export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
}