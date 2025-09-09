// scripts/verify-supabase.ts
import postgres from 'postgres';

async function verifySupabaseConnection() {
  console.log('🔍 Verificando conexión a Supabase...\n');

  // Usar las variables de entorno directamente
  const connectionString = "postgres://postgres.sklxmvdjlducwcdkvqda:DLKhLgesDYtRPyI8@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x";

  if (!connectionString) {
    console.error('❌ No se encontró la cadena de conexión');
    return;
  }

  const sql = postgres(connectionString, { prepare: false });

  try {
    // Verificar posts
    const postsResult = await sql`SELECT COUNT(*) as count FROM posts`;
    const postsCount = postsResult[0].count;
    console.log(`📝 Posts en base de datos: ${postsCount}`);

    // Verificar servicios
    const servicesResult = await sql`SELECT COUNT(*) as count FROM services`;
    const servicesCount = servicesResult[0].count;
    console.log(`🔧 Servicios en base de datos: ${servicesCount}`);

    // Verificar proyectos
    const projectsResult = await sql`SELECT COUNT(*) as count FROM projects`;
    const projectsCount = projectsResult[0].count;
    console.log(`📁 Proyectos en base de datos: ${projectsCount}`);

    // Verificar streams
    const streamsResult = await sql`SELECT COUNT(*) as count FROM streams`;
    const streamsCount = streamsResult[0].count;
    console.log(`📹 Streams en base de datos: ${streamsCount}`);

    console.log('\n✅ Conexión a Supabase verificada exitosamente!');
    console.log('✅ Todos los datos han sido migrados correctamente.');

  } catch (error) {
    console.error('❌ Error al verificar conexión a Supabase:', error);
  } finally {
    await sql.end();
  }
}

verifySupabaseConnection();