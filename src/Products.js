import img1 from './Images/ProductImages/Montreux.jpeg'
import img2 from './Images/ProductImages/cinema500.jpg'
import img3 from './Images/ProductImages/genesispen.jpg'
import img4 from './Images/ProductImages/easyflowpen.jpg'
import img5 from './Images/ProductImages/flashlight.jpg'
import img6 from './Images/ProductImages/letteropener.jpg'

export const products = [
    {
        id: 1,
        name: "Montreux Pen",
        image: img1,
        alt: "Montreux Pen with customized imprint",
        details: ['Your order will contain 7 sparkling, translucent barrel colors', 'You may order as few as 100 pieces.', 'We print your message in 3 locations, all of which are always in view!', 'Ink refill color is dark blue', 'Generous ink refill writes 1.5 miles!  Your clients are unlikely to ever run out of ink.'],
        pricing: ['100 quantity - $0.95/per item', '250 quantity - $0.87/per item', '500 quantity - $0.79/per item', '1,000 quantity - $0.75/per item']
    },
    {
        id: 2,
        name: "Cinema 500 Pen",
        image: img2,
        alt: "Cinema 500 Pen with customized imprint",
        details: ['Your price includes imprints on the top of barrel and clip – always in view!', 'Generous ink refill writes 1.5 miles!  Your clients are unlikely to ever run out of ink.', 'Order our assortment of 6 vibrant colors, or pick any individual color! (250 minimum per color)', 'Ink refill color is dark blue'],
        pricing: ['500 quantity - $0.59/per item', '1000 quantity - $0.52/per item']
    },
    {
        id: 3,
        name: "Genesis Pen",
        image: img3,
        alt: "Genesis Pen with customized imprint",
        details: ['The barrel is made from 100% recycled product, including discarded PET plastic bottles.', 'Your purchase of this pen helps protect our oceans from the flood of plastic waste.', 'Extra large ink refill delivers up to 3.5 miles of write out – a lifetime supply for most users.', 'We print your message in 3 locations, all of which are always in view.', 'Small minimum order – just 100 pieces'],
        pricing: ['100 quantity - $1.35/per item', '250 quantity - $1.19/per item', '500 quantity - $1.09/per item', '1000 quantity - $1.05/per item']
    },
    {
        id: 4,
        name: "Easy Flow Pen",
        image: img4,
        alt: "Easy Flow Pen with customized imprint",
        details: ['The easiest writing ballpoint pen ever.  Flows effortlessly!)', 'Generous 1,200 meter ink refill supply', 'Ships in 4 sparkling, translucent barrel colors', '3 imprint areas located where your message is always in sight!'],
        pricing: ['300 quantity - $0.95/per item', '600 quantity - $0.91/per item', '1,200 quantity - $0.87/per item']
    },
    {
        id: 5,
        name: "Triple Beam Flatlight",
        image: img5,
        alt: "Triple Beam Flashlight with customized imprint",
        details: ['Long lithium battery life – up to 3 years and batteries replaceable', '3 powerful LED beams throw a generous amount of light to show the way', 'Flat shape can fit in most tight spaces and travels well.', 'Large imprint area to generously highlight your message'],
        pricing: []
    },
    {
        id: 6,
        name: "Powerstroke Letter Opener",
        image: img6,
        alt: "Powerstroke Letter Opener with customized imprint",
        details: ['MORE POWER -The long gripping area gives you a powerful base from which to push the blade forward, so you quite naturally apply more force to the task.', 'FAR SAFER TO USE - Our design keeps your hands far away from the cutting process, preventing accidental nicks or those nasty paper cuts!', 'GENEROUS IMPRINT AREA -Your company’s message can contain up to 4 lines of text, or your logo in up to 2 colors.   Your clients will visually connect with you every time they open their mail!'],
        pricing: ['as low as $1.29 each, price dependent on quantity']
    }
]
