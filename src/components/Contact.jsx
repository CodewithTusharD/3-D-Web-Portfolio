import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { useActionData } from 'react-router-dom';



const Contact = () => {
  const fromRef= useRef();
  const[form, setForm] = useState({
     name: '',
     email: '',
     message: '',
  });

  const [loading , setLoading] = useState(false);

  const handleChange = (e)=>{

    const {target} =e;
    const {name,value} = target;

    setForm({...form ,[name] :value})


  }

  const handleSubmit = (e) => {


    // JyJecGPj9hASfQIXE
//template_co3dc65
// service_6a8rkhj
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all the fields before submitting.");
      return; // Exit the function if validation fails
    }
    setLoading(true);
    emailjs.send('service_6a8rkhj', 'template_co3dc65' ,
      {
        from_name: form.name,
        to_name: "Mr. Tushar Dhingra",
        from_email: form.email,
        to_email: "tushardhingra314@gmail.com",
        message: form.message,
      },
      'JyJecGPj9hASfQIXE'
     ).then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
};

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overFlow-hidden">
        <motion.div 
        variants={slideIn('left', "tween" , 0.09,1)}
        className=" flex-[0.75] bg-black-100 p-8 rounded-2xl">

          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form ref={fromRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4 "> Your Name</span>
              <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's you name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>

            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          </form>

        </motion.div>
        <motion.div variants={slideIn('right' ,"tween" , 0.09, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")