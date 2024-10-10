import React from 'react';
import { Waves } from 'lucide-react';

const PricingCard = ({ title, price, description, features }: { title: string; price: string; description: string; features: string[] }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-3xl font-bold mb-4">{price}</p>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="list-disc list-inside text-gray-700 mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
      Réserver
    </button>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Waves size={40} className="mr-4" />
              <h1 className="text-3xl font-bold">Waves Aqua Parc</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:underline">Accueil</a></li>
                <li><a href="#" className="hover:underline">Attractions</a></li>
                <li><a href="#" className="hover:underline">Tarifs</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Tarifs Salle de Jeux</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PricingCard
            title="Enfant (3-12 ans)"
            price="8€"
            description="Accès illimité à la salle de jeux"
            features={[
              "Structures gonflables",
              "Toboggans",
              "Piscine à balles",
              "Jeux d'arcade"
            ]}
          />
          <PricingCard
            title="Adulte (13+ ans)"
            price="5€"
            description="Accès pour surveiller les enfants"
            features={[
              "Accès aux zones de repos",
              "Wifi gratuit",
              "Café offert"
            ]}
          />
          <PricingCard
            title="Groupe (10+ enfants)"
            price="6€ / enfant"
            description="Tarif spécial pour les groupes"
            features={[
              "Accès illimité à la salle de jeux",
              "Salle privée pour les effets personnels",
              "Animateur dédié",
              "Goûter inclus"
            ]}
          />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Waves Aqua Parc. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;