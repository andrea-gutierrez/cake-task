import {IntroDialog} from "@/app/(welcome)/components/IntroDialog";

export default function WelcomePage() {
    return (
        <>
            <h2>Welcome</h2>
            <h3>Welcome to Your Custom Experience!</h3>
            <p>Sometimes, it’s the little things that make all the difference. Choose between light and dark mode to
                match your mood or surroundings. Whether you’re in the mood for a bright, clear interface or a cozy,
                low-light feel, a single tap is all it takes to make this space uniquely yours. Enjoy exploring, and let
                your style set the tone.</p>

            <IntroDialog></IntroDialog>
        </>
    );
}
