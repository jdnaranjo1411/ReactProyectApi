'use client'

import react from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";

export default function CategoriesDropdown({}) {
    const router = useRouter();
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        const getCategories = async () => {
            const categories = await fetch('https://fakestoreapi.com/products/categories/')
            .then(res => res.json());
            setCategories(categories);
        }
        getCategories();
    }, [])
    console.log(categories);
    if(categories.length<1)return null;
return(
    <select className="ml-4" onChange={(e)=>{
      router.push(`/categories/${e.target.value}`)}}>
        {categories.map(category => (
            <option key={category} value={category}>
                {category}
            </option>
        ))}
    </select>
)
}