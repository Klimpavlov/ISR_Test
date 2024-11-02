import {Sidebar} from "@/components/ui/Sidebar";

export default function About() {
    return (
        <div className='flex'>
            <Sidebar/>
            <div className="p-8">
                <h1 className="text-2xl font-bold">About Us</h1>
                <p className="mt-4">
                    Welcome to our online store! We offer a wide range of products to meet your needs.
                    Our mission is to provide high-quality products at affordable prices.
                </p>
            </div>
        </div>
    );
}
