<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: "📅",
    title: "Gestão de Agenda",
    description: "Controle total dos seus horários",
  },
  {
    icon: "👥",
    title: "Base de Clientes",
    description: "Fidelize e atraia novos clientes",
  },
  {
    icon: "⭐",
    title: "Sistema de Avaliações",
    description: "Construa sua reputação online",
  },
  {
    icon: "📈",
    title: "Relatórios",
    description: "Analise seu crescimento",
  },
  {
    icon: "💳",
    title: "Pagamentos",
    description: "Receba de forma segura",
  },
  {
    icon: "🛡️",
    title: "Segurança Total",
    description: "Dados protegidos 24/7",
  },
]
</script>

<template>
  <div class="page">

    <!-- ========== HERO ========== -->
    <section class="hero">
      <div class="premium-badge">
        💈 Plataforma Premium para Barbeiros
      </div>

      <div class="icon-circle">✂️</div>

      <h1 class="title">
        <span class="highlight">Eleve sua Barbearia</span><br />
        ao Próximo Nível
      </h1>

      <p class="subtitle">
        Conecte-se com milhares de clientes, gerencie sua agenda com inteligência e transforme sua paixão em um negócio de sucesso
      </p>

      <div class="stats">
        <div class="stat">
          <h2>10K+</h2>
          <p>Barbeiros Ativos</p>
        </div>
        <div class="stat">
          <h2>500K+</h2>
          <p>Agendamentos</p>
        </div>
        <div class="stat">
          <h2>4.9★</h2>
          <p>Avaliação</p>
        </div>
        <div class="stat">
          <h2>99%</h2>
          <p>Satisfação</p>
        </div>
      </div>

      <div class="benefits">
        <div class="benefit">✅ Aumento de 40% na clientela</div>
        <div class="benefit">✅ Redução de 60% no tempo administrativo</div>
        <div class="benefit">✅ Crescimento de 35% na receita</div>
        <div class="benefit">✅ Sistema de fidelização integrado</div>
      </div>
    </section>

    <!-- ========== FEATURES ========== -->
    <section class="features-section">
      <div class="content">
        <h2>
          Tudo que você precisa para <span class="highlight">crescer</span>
        </h2>
        <p class="subtitle">
          Ferramentas profissionais desenvolvidas especialmente para barbeiros modernos
        </p>

        <div class="features-grid">
          <div v-for="(feature, i) in features" :key="i" class="feature-card">
            <div class="icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ========== HERO ========== */
.hero {
  background: linear-gradient(to bottom, #0b0b0b, #111);
  background-image: url('@/assets/barbearia-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 6rem 2rem 7rem;
}

.premium-badge {
  background: #ffcc00;
  color: #000;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  display: inline-block;
}

.icon-circle {
  background: rgba(255, 204, 0, 0.1);
  border: 2px solid #ffcc00;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 0 auto 1.5rem;
}

.title {
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.highlight {
  color: #ffcc00;
}

.subtitle {
  font-size: 1.1rem;
  color: #ddd;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
}

.stat h2 {
  color: #ffcc00;
  font-size: 2rem;
  margin-bottom: 0.3rem;
}

.stat p {
  font-size: 1rem;
  color: #ccc;
}

.benefits {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.benefit {
  border: 1px solid #ffcc00;
  padding: 0.8rem 1.2rem;
  border-radius: 1rem;
  background: rgba(255, 204, 0, 0.05);
  color: #ffcc00;
  font-weight: 500;
  font-size: 0.95rem;
}

/* ========== FEATURES ========== */
.features-section {
  background-color: #0b0b0b;
  background-image: radial-gradient(rgba(255, 204, 0, 0.02) 1px, transparent 1px);
  background-size: 30px 30px;
  color: #fff;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  max-width: 1200px;
  text-align: center;
  width: 100%;
}

.features-section h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.features-section .highlight {
  color: #ffcc00;
}

.features-section .subtitle {
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #131313;
  border-radius: 1rem;
  padding: 2rem;
  text-align: left;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(255, 204, 0, 0.15);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(255, 204, 0, 0.2);
}

.icon {
  background-color: #ffcc00;
  color: #000;
  border-radius: 0.6rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #fff;
}

.feature-card p {
  color: #aaa;
  font-size: 0.95rem;
}

/* ========== RESPONSIVO ========== */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .stats {
    gap: 1.5rem;
  }

  .benefits {
    flex-direction: column;
    align-items: center;
  }

  .benefit {
    width: 90%;
  }

  .features-section h2 {
    font-size: 1.8rem;
  }

  .features-grid {
    gap: 1.5rem;
  }

  .feature-card {
    padding: 1.5rem;
  }
}
</style>
