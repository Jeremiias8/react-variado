import React from 'react'
import digscreen from '../assets/img/digital-screen.jpg';
import { utils } from './Utils/utils';

export const Props = () => {

    const Avatar = ({ persona, size }) => {
        <img
            className='' 
            src={digscreen} 
            alt={persona.nombre}
            width={size}
            height={size}
        />
    }

    const AvatarProps = (props) => {
        let key = props.key;
        let value = props.value;
    }
    console.log(AvatarProps({key, value}));

    const AvatarProfileSpread = (props) => {
        return (
            <div>
                <Avatar {...props} />
            </div>
        )
    }
    console.log(AvatarProfileSpread);

    

  return (
    <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <h2>Props Component</h2>
        <Avatar />

        <Avatar 
            persona={{ nombre: 'Jere', imgId: '53cGD2' }}
            size={100}
        />
        <Avatar 
            persona={{ nombre: 'Gero', imgId: '24cHJ6' }}
            size={200}
        />
        <Avatar 
            persona={{ nombre: 'Raphinha', imgId: '17fri8' }}
            size={150}
        />
    </div>
  )

}
