'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../inputs/Input';



const RegisterModal = () => {
    const registerModal = useRegisterModal();

    const [ isLoading, setIsLoading  ] = useState(false);

    const {
        register, handleSubmit, formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name:'',
            email:'',
            password:'',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> =(data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
        .then(() => { 
            registerModal.onClose();
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    const bodyContent = (
        <div className='flex flex-col gap-4'>
            <Heading
                title='Welcome to Airbnb'
                subtitle='Sign up to get started'
            />
            <Input
                id='name'
                label='Name'
                disabled={isLoading}
                required
                register={register}
                errors={errors}
            />
            <Input
                id='email'
                label='Email'
                disabled={isLoading}
                required
                register={register}
                errors={errors}
            />
            <Input
                id='password'
                label='Passwword'
                disabled={isLoading}
                required
                register={register}
                errors={errors}
            />
        </div>
    )

    return ( 
        <Modal 
            disabled={isLoading}
            onClose={registerModal.onClose}
            isOpen={registerModal.isOpen}
            title="Login Or Sign Up"
            actionLabel='Continue'
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
     );
}
 
export default RegisterModal;