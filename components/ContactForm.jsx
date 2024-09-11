'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [sent, setSent] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        setSent(true);
    };

    return (
        <section id='contact' className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', {
                                required: 'This field is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name should be at least 3 characters',
                                },
                            })}
                            className={`shadow-sm bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
                            placeholder="John Doe"
                        />
                        {errors.name && (
                            <p className="text-sm text-red-600 dark:text-red-400">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', {
                                required: 'This field is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Invalid email address',
                                },
                            })}
                            className={`shadow-sm bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
                            placeholder="name@flowbite.com"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-600 dark:text-red-400">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            {...register('subject', {
                                required: 'This field is required',
                                minLength: {
                                    value: 3,
                                    message: 'Subject should be at least 3 characters',
                                },
                            })}
                            className={`block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
                            placeholder="Let us know how we can help you"
                        />
                        {errors.subject && (
                            <p className="text-sm text-red-600 dark:text-red-400">
                                {errors.subject.message}
                            </p>
                        )}
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows="6"
                            {...register('message', {
                                required: 'This field is required',
                                minLength: {
                                    value: 10,
                                    message: 'Message should be at least 10 characters',
                                },
                            })}
                            className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
                            placeholder="Leave a comment..."
                        />
                        {errors.message && (
                            <p className="text-sm text-red-600 dark:text-red-400">
                                {errors.message.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Send message
                    </button>
                    {sent && (
                        <p className="text-sm text-green-600 dark:text-green-400">
                            Your message has been sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
