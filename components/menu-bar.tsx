import React, { useState } from 'react'
import Link from 'next/link'
import { Input, Menu, Segment } from 'semantic-ui-react'

const MenuBar = ({ className }) => {
    const [activeItem, setActiveItem] = useState('Home')
    const menuItems = [
        { as: Link, content: "Home", key: "home", path: "/" },
        { as: Link, content: "Blog", key: "blog", path: "/blog" }
    ]
    //This used to have E but threw a typeError, see defining types if throws error again

    const handleItemClick = ({ name }: any) => setActiveItem(name)

    return (
        <div className={className}>
            <Menu>
                <Link href="/" passHref>
                        <Menu.Item
                            name='home'
                            active={activeItem === 'home'}
                            onClick={handleItemClick}
                        />
                </Link>
                <Link href="/blog" passHref>
                        <Menu.Item
                            name='blog'
                            active={activeItem === 'blog'}
                            onClick={handleItemClick}
                        />
                </ Link>
                <Link href="/projects" passHref>
                        <Menu.Item
                            name='projects'
                            active={activeItem === 'projects'}
                            onClick={handleItemClick}
                        />
                </Link>
                <Link href="/about" passHref>
                        <Menu.Item
                            name='about'
                            active={activeItem === 'about'}
                            onClick={handleItemClick}
                        />
                </Link>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>

    )
}
export default MenuBar