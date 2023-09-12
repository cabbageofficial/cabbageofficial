import { Html, Head, Font, Img, Link, Text, Tailwind, Container } from "@react-email/components";

//Interface
interface Props {
    name: string;
    subject: string;
    email: string;
    message: string;
}

const ConfirmTemplate = ({ name, subject, email, message }: Props) => {
    return (
        <Html lang="en">
            <Head>
                <Font
                    fontFamily="Inter"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2",
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
                <Font
                    fontFamily="Inter"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2",
                        format: 'woff2',
                    }}
                    fontWeight={600}
                    fontStyle="normal"
                />
            </Head>
            <Tailwind>
                <Container className="mt-6">
                    <Img src="https://res.cloudinary.com/dy3fz1ire/image/upload/v1694533343/logo_enbdya.png" alt="cabbage" width="400" height="400" className="mx-auto w-[130px] h-[130px]" />
                    <Text className="text-2xl font-bold p-0 m-0 text-center">Cabbage <span className="text-[#F00000]">web</span></Text>
                    <Text className="font-semibold p-0 m-0 text-center">One client message</Text>
                    <Text className="m-0 font-semibold mt-10"><span className="text-[#F00000]">Name:</span> {name}</Text>
                    <Text className="m-0 font-semibold"><span className="text-[#F00000]">Subject:</span> {subject}</Text>
                    <Text className="m-0 font-semibold"><span className="text-[#F00000]">Email:</span> <Link href={`mailto:${email}`}>{email}</Link></Text>
                    <Text className="mt-10">
                        {message}
                    </Text>
                    <Text className="mt-12 text-sm text-center">
                        www.cabbageweb.com
                    </Text>
                </Container>
            </Tailwind>
        </Html>
    );
};

export default ConfirmTemplate;