import {createClient} from 'next-sanity';
import imageUrlBuilder from "@sanity/image-url";


export const client =  createClient({
    apiVersion: '2023-03-07',
    dataset:'production',
    projectId:'p5ta6gb2',
    useCdn:false
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

