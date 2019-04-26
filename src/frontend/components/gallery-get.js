//import React not necessary as this is just a function

import poster001 from '../img/pugni_in_tasca.jpg';
import poster002 from '../img/eclisse.jpg';
import poster003 from '../img/americano_a_roma.jpg';
import poster004 from '../img/hable_con_ella.jpg';
import poster005 from '../img/ottoemezzo_02.jpg';
import poster006 from '../img/great_beauty.jpg';
import poster007 from '../img/marienbad_02.jpg';
import poster008 from '../img/killing_01.jpg';
import poster009 from '../img/charme_03.jpg';


// using an array of objects as front-end data structure
// array works as a wrapper, instead of <div>
export default function getGallery() {
    return [
        // id appears in browser address bar

        {id: 'show006',  
        name: 'The Great Beauty', 
        logo: poster006, 
        year: 2013,
        country: 'Italy',
        synopsis: 'Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.'},

        {id: 'show009',
        name: 'Le Charme Discret De La Bourgeoisie',
        logo: poster009,
        year: 1972,
        country: 'France',
        synopsis: 'A surreal, virtually plotless series of dreams centered around six middle-class people and their consistently interrupted attempts to have a meal together.'
        },

        {id: 'show002', 
        name: 'L`Eclisse', 
        logo: poster002,  
        year: 1962,
        country: 'Italy',
        synopsis: 'A young woman meets a vital young man, but their love affair is doomed because of the man \'s materialistic nature.'}, 

        {id: 'show007',  
        name: 'Last Year At Marienbad', 
        logo: poster007, 
        year: 1961,
        country: 'France',
        synopsis: 'In a strange and isolated chateau, a man becomes acquainted with a woman and insists that they have met before.'},

        {id: 'show001', 
        name: 'I Pugni In Tasca', 
        logo: poster001, 
        year: 1965,
        country: 'Italy',
        synopsis: 'A young man takes drastic measures to rid his dysfunctional family of its various afflictions.'}, 

        {id: 'show008', 
        name: 'The Killing', 
        logo: poster008,  
        year: 1956,
        country: 'UK',
        synopsis: 'Crook Johnny Clay assembles a five man team to plan and execute a daring race-track robbery.'},

        {id: 'show004', 
        name: 'Hable Con Ella', 
        logo: poster004,  
        year: 2002,
        country: 'Spain',
        synopsis: 'Two men share an odd friendship while they care for two women who are both in deep comas.'},

        {id: 'show005',  
        name: 'Otto E Mezzo', 
        logo: poster005, 
        year: 1963,
        country: 'Italy',
        synopsis: 'A harried movie director retreats into his memories and fantasies.'}, 

        {id: 'show003', 
        name: 'Un Americano A Roma', 
        logo: poster003,  
        year: 1954,
        country: 'Italy',
        synopsis: 'Nando Moriconi is a young Italian living in Rome. He is fond for everything coming from the United States. He tries to speak American-English, to wear clothes he thinks Americans wear, to walk like John Wayne, and to eat cornflakes with ketchup. His life is a parody of the real American way of life that he could not get.'}
    ];
}
