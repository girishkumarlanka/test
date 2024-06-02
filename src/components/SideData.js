import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/About',
    icon: <AiIcons.AiFillTrophy/>,
    cName: 'nav-text'
  },
  {
    title: 'VLogs',
    path: '/VLogs',
    icon: <AiIcons.AiFillVideoCamera />,
    cName: 'nav-text'
  },
  {
    title: 'Articles',
    path: '/Articles',
    icon: <AiIcons.AiFillFileText />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/Contact',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
];