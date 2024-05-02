import { atom } from "recoil"

export const pageState = atom({
    key: 'pageState',
    default: "Home"
})

 export const adminState = atom({
    key: 'adminState',
    default: 'add'
 })

export const About = {
    Aboutus: 'At GRACE ATTIRE, we’re passionate about bringing you the best shopping experience. Whether you’re looking for trendy fashion, high-quality electronics, or unique home decor, we’ve got you covered. Here’s what sets us apart:',
    ourstory: 'GRACE ATTIRE was founded with a simple mission: to make online shopping delightful and convenient. Our journey began in [Year of Establishment] when a group of tech enthusiasts and fashion aficionados came together. We envisioned a platform where customers could explore a wide range of products, discover new trends, and shop with confidence.',
    whatweoffer: ["Curated Collections: Our team scours the globe to curate the latest fashion, tech gadgets, and lifestyle essentials. From chic clothing to cutting-edge gadgets, we’ve got something for everyone.","Quality Assurance: We believe in quality over quantity. Every product on our platform undergoes rigorous testing to ensure it meets our standards. You can shop with confidence, knowing that you’re getting the best.","Fast and Reliable Shipping: We know waiting for your order can be tough. That’s why we partner with trusted shipping carriers to deliver your purchases swiftly and securely.","Exceptional Customer Support: Have a question? Need assistance? Our friendly customer support team is here to help. Reach out to us anytime, and we’ll make sure you’re taken care of."],
    ourvision: "We’re not just an e-commerce store; we’re a community. Our vision is to create a space where shoppers can connect, explore, and find joy in every purchase. Whether you’re a trendsetter, a tech enthusiast, or a home decor lover, we invite you to be part of our journey."
}