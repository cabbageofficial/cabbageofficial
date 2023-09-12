import { Html, Head, Font, Img, Text, Tailwind, Container } from "@react-email/components";

const ReplyTemplate = () => {
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
                    <Text className="text-3xl font-bold text-center">Thanks<span className="text-[#F00000]">!</span></Text>
                    <Text className="text-center font-semibold">We received your message. We will contact you soon through your given email. Thank you for contacting with us.</Text>
                    <Text className="m-0 mt-10 text-center text-sm">
                        This email is created automatically. Please do not reply.
                    </Text>
                    <Text className="m-0 text-center text-sm">www.cabbageweb.com</Text>
                </Container>
            </Tailwind>
        </Html>
    );
};

export default ReplyTemplate;