import Head from 'next/head';

interface MetaProps {
  title: string;
  description: string;
}

const Meta: React.FC<MetaProps> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default Meta;
