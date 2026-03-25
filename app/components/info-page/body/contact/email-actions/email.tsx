import { Html, Text } from "@react-email/components";

export default function Email({ name, email, message }: { name: string, email: string, message: string }) {
    return (
        <Html>
            <Text>{email}</Text>
            <Text>{message}</Text>
        </Html>
    )
}