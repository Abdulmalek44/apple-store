import customer1 from "@/assets/image/customer1-68e0c3c8.jpeg";
import customer2 from "@/assets/svg/customer2-e014463b.svg";

export const NavLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Reviews", href: "/reviews" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
];

export const ListGroupLinks = [
    { name: "Profile", href: "/profile" },
    { name: "Orders", href: "orders" },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];