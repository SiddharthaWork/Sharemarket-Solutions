import Aidriven from "@/Components/Aidriven";
import Footer from "@/Components/Footer";
import Form from "@/Components/Form";
import Industry from "@/Components/Industires";
import Navbar from "@/Components/Navbar";
import Solutions from "@/Components/Solutions";
import Support from "@/Components/Support";

export default function Home() {
  return (
   <div className="overflow-hidden">
    <Navbar/>
    <Solutions/>
    <Aidriven/>
    <Industry/>
    <Support/>
    <Form/>
    <Footer/>
   </div>
  );
}
