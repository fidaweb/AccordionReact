import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import plus from './assets/images/icon-plus.svg'
import minus from './assets/images/icon-minus.svg'


const AccordionDemo = () => (
  <Accordion.Root
    // className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
    className='faq-container'
    type="multiple"
    // defaultValue="item-1"
    collapsible
  >
    

    <AccordionItem value="item-1">
      <AccordionTrigger>What is Frontend Mentor, and how will it help me?</AccordionTrigger>
      <AccordionContent>Frontend Mentor offers realistic coding challenges to help developers improve their 
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
          all levels and ideal for portfolio building.</AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Is Frontend Mentor free?</AccordionTrigger>
      <AccordionContent>
      Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
      option providing access to a range of projects suitable for all skill levels.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can I use Frontend Mentor projects in my portfolio?</AccordionTrigger>
      <AccordionContent>
      Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>What is Frontend Mentor, and how will it help me?</AccordionTrigger>
      <AccordionContent>
      Frontend Mentor offers realistic coding challenges to help developers improve their 
      frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
          all levels and ideal for portfolio building.
      </AccordionContent>
    </AccordionItem>
   
    
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      // 'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      'faq-item',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  // <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        // 'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        'faq-question',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      {/* <ChevronDownIcon


        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        // aria-hidden
      /> */}
     
      <img className='sign plus' src={plus} alt='' onClick={(e)=>{
        

        const sign=e.target
        sign.classList.toggle('plus')
        if(sign.classList.contains('plus')){
          sign.src=plus
        }
        else{
          sign.src=minus
        }

      }} />
      
     
    </Accordion.Trigger>
  // </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
   //   'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      'faq-answer',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {/* <div className="py-[15px] px-5">{children}</div> */}
    {children}
  </Accordion.Content>
));

export default AccordionDemo;