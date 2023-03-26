import Link from 'next/link';
import { useEffect, useState } from 'react'
import { LogoIcon } from "../../../assets/icon-libary";

function MovieIndexHeader() {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', transtionHeader)
        return () => {
            window.addEventListener('scroll', transtionHeader)
        }

    }, [])


    const transtionHeader = () => {
        if (window.scrollY > 100) {
            setShow({ show: true })
        } else {
            setShow({ show: false })
        }
    }





    return (
        <section className={`movie-index-header ${show && 'header-black'}`} >
            <div className="header-content">
                <Link href={'/'}>
                    <LogoIcon />
                </Link>

                <img src="https://res.cloudinary.com/dsvs2bgn4/image/upload/v1675364027/AAAABfMnIhIdkM8LdU5BZaYVaxoVTrMGzIjafPBzCQUwebzxeK7JKvcI7-Jm-5AituzcdJYIT_45NSkbbTwfVva-E01G9J1YVVBveA_sydo43.png" alt="avatar" />


            </div>

        </section >
    )
}

export default MovieIndexHeader