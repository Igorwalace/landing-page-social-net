//shadcn
import { Button } from '@/components/ui/button'

//react
import React from 'react'

//react-icons
import { FiMenu } from 'react-icons/fi'

const Button_Menu = () => {
    return (
        <>
            <div className="md:hidden">
                <Button variant="default">
                    <FiMenu className="h-6 w-6" />
                </Button>
            </div>
        </>
    )
}

export default Button_Menu