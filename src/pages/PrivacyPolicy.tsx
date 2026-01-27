import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-slate-300">
      <h1 className="text-3xl font-bold text-white mb-8">Politique de Confidentialité - Écosystème NodalForge</h1>
      <p className="mb-8 text-sm text-slate-400">Dernière mise à jour : 27 Janvier 2026</p>

      <p className="mb-8">
        La présente politique de confidentialité détaille la manière dont NodalForge (incluant les services Cardify, NodalCV et home.nodalforge.cloud) collecte, utilise et protège vos informations.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">1. Responsable du Traitement</h2>
        <p>
          L'ensemble des services est édité par NodalForge. Pour toute question relative à vos données personnelles, vous pouvez nous contacter à : <a href="mailto:nodalforge@gmail.com" className="text-blue-400 hover:text-blue-300">nodalforge@gmail.com</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">2. Données Collectées</h2>
        <p className="mb-2">Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Informations de compte :</strong> Email, nom et photo de profil (via Google SSO).</li>
          <li><strong className="text-white">Données de contenu (NodalCV/Cardify) :</strong> Toutes les informations saisies pour la création de vos CV (expériences, formations, compétences, coordonnées).</li>
          <li><strong className="text-white">Données de navigation (Analytics) :</strong> Adresse IP (anonymisée), type d'appareil, pages visitées et sources de trafic (via Google Analytics 4).</li>
          <li><strong className="text-white">Données d'interaction :</strong> Nombre de vues sur votre CV, mots-clés de recherche ayant mené à votre profil.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">3. Finalité de la Collecte</h2>
        <p className="mb-2">Vos données sont utilisées pour :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Fournir le service :</strong> Créer, stocker et diffuser vos CV en ligne.</li>
          <li><strong className="text-white">Statistiques :</strong> Vous fournir des analyses précises sur la visibilité de votre profil (vues, recherches).</li>
          <li><strong className="text-white">Amélioration :</strong> Analyser l'audience globale de nos outils pour optimiser l'expérience utilisateur.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">4. Partage des Données</h2>
        <p className="mb-2">Nous ne vendons jamais vos données. Elles sont uniquement partagées avec nos sous-traitants techniques pour le fonctionnement du service :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Google Cloud / SSO :</strong> Authentification sécurisée.</li>
          <li><strong className="text-white">Google Analytics 4 :</strong> Mesure d'audience (uniquement si vous avez accepté les cookies).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">5. Cookies et Tracking</h2>
        <p className="mb-2">Nous utilisons des cookies pour :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Maintenir votre session connectée.</li>
          <li>Enregistrer vos préférences de consentement.</li>
          <li>Mesurer l'audience via Google Analytics 4 (soumis à votre accord préalable via notre bannière de cookies).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">6. Vos Droits (RGPD)</h2>
        <p className="mb-2">Conformément à la réglementation européenne, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Droit d'accès et de rectification :</strong> Vous pouvez modifier vos données à tout moment depuis votre espace personnel.</li>
          <li><strong className="text-white">Droit à l'effacement :</strong> Vous pouvez demander la suppression de votre compte et de toutes les données associées.</li>
          <li><strong className="text-white">Droit d'opposition :</strong> Vous pouvez refuser le tracking analytique via notre bannière de cookies.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">7. Sécurité</h2>
        <p className="mb-4">
          Toutes vos données sont transmises via un protocole sécurisé (<strong className="text-white">HTTPS/TLS</strong>). Nous appliquons des politiques de chiffrement strictes pour protéger vos informations contre tout accès non autorisé.
        </p>
        <p className="p-4 bg-slate-900 rounded-lg border border-slate-800">
          <strong className="text-white">Note importante :</strong> En utilisant nos services, vous acceptez que vos CV publics soient accessibles via un lien unique et puissent être indexés par les moteurs de recherche si vous choisissez de les rendre publics.
        </p>
      </section>
    </main>
  );
};
