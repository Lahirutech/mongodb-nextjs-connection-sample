import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@/app/lib/db';
import Post from '../../models/PostModel';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const con = await dbConnect();
    con &&
      Post.create({ name: 'postname' }).then((data) => {
        console.log(data);
      });
    return new NextResponse('Posted model');
  } catch (error) {
    console.log('error from route', error);
    return new NextResponse('Error');
  }
}
