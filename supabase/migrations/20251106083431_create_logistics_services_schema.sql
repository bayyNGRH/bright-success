/*
  # Logistics & Supply Chain Business Schema

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `name_en` (text)
      - `name_zh` (text)
      - `name_id` (text)
      - `description_en` (text)
      - `description_zh` (text)
      - `description_id` (text)
      - `icon` (text)
      - `features_en` (text[])
      - `features_zh` (text[])
      - `features_id` (text[])
      - `order` (integer)
      - `created_at` (timestamp)
    
    - `case_studies`
      - `id` (uuid, primary key)
      - `title_en` (text)
      - `title_zh` (text)
      - `title_id` (text)
      - `description_en` (text)
      - `description_zh` (text)
      - `description_id` (text)
      - `industry` (text)
      - `challenge_en` (text)
      - `challenge_zh` (text)
      - `challenge_id` (text)
      - `solution_en` (text)
      - `solution_zh` (text)
      - `solution_id` (text)
      - `result_en` (text)
      - `result_zh` (text)
      - `result_id` (text)
      - `image_url` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
*/

DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name_en text NOT NULL,
  name_zh text NOT NULL,
  name_id text NOT NULL,
  description_en text NOT NULL,
  description_zh text NOT NULL,
  description_id text NOT NULL,
  icon text NOT NULL,
  features_en text[] DEFAULT ARRAY[]::text[],
  features_zh text[] DEFAULT ARRAY[]::text[],
  features_id text[] DEFAULT ARRAY[]::text[],
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_en text NOT NULL,
  title_zh text NOT NULL,
  title_id text NOT NULL,
  description_en text NOT NULL,
  description_zh text NOT NULL,
  description_id text NOT NULL,
  industry text NOT NULL,
  challenge_en text NOT NULL,
  challenge_zh text NOT NULL,
  challenge_id text NOT NULL,
  solution_en text NOT NULL,
  solution_zh text NOT NULL,
  solution_id text NOT NULL,
  result_en text NOT NULL,
  result_zh text NOT NULL,
  result_id text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view services"
  ON services FOR SELECT
  USING (true);

CREATE POLICY "Public can view case studies"
  ON case_studies FOR SELECT
  USING (true);

INSERT INTO services (slug, name_en, name_zh, name_id, description_en, description_zh, description_id, icon, features_en, features_zh, features_id, "order") VALUES
  ('air-freight', 'Air Freight', '空运', '货运航空', 'Fast and reliable international air freight services with global coverage', '快速可靠的国际空运服务，覆盖全球', 'Layanan kargo udara internasional yang cepat dan andal dengan jangkauan global', 'Plane', ARRAY['Express delivery worldwide', 'Real-time tracking', 'Customs clearance support', 'Door-to-door service'], ARRAY['快速全球配送', '实时追踪', '海关清关支持', '门到门服务'], ARRAY['Pengiriman cepat ke seluruh dunia', 'Pelacakan real-time', 'Dukungan bea cukai', 'Layanan door-to-door'], 1),
  ('sea-freight', 'Sea Freight', '海运', '海运货运', 'Cost-effective ocean freight solutions for bulk shipments', '具有成本效益的海洋运输解决方案', 'Solusi pengiriman laut yang hemat biaya untuk pengiriman massal', 'Ship', ARRAY['Competitive rates', 'FCL & LCL options', 'Port expertise', 'Multi-port access'], ARRAY['竞争力强的运费', '整箱和散箱选项', '港口专业知识', '多港口通道'], ARRAY['Tarif kompetitif', 'Opsi FCL & LCL', 'Keahlian pelabuhan', 'Akses multi-port'], 2),
  ('land-transport', 'Land Transport', '陆运', '运输陆地', 'Efficient ground transportation across regional and international routes', '跨地区和国际路线的高效陆运', 'Transportasi darat yang efisien melintasi rute regional dan internasional', 'Truck', ARRAY['Dedicated fleet', 'Temperature-controlled', 'Professional drivers', 'Route optimization'], ARRAY['专属车队', '温度控制', '专业驾驶员', '路线优化'], ARRAY['Armada khusus', 'Kontrol suhu', 'Pengemudi profesional', 'Optimisasi rute'], 3),
  ('warehouse', 'Warehouse Management', '仓库管理', 'Manajemen Gudang', 'Modern warehousing with advanced inventory management systems', '采用先进库存管理系统的现代仓库', 'Penyimpanan modern dengan sistem manajemen inventaris canggih', 'Package', ARRAY['24/7 monitoring', 'Automated systems', 'Climate control', 'Quality assurance'], ARRAY['24/7 监控', '自动化系统', '气候控制', '质量保证'], ARRAY['Pemantauan 24/7', 'Sistem otomatis', 'Kontrol iklim', 'Jaminan kualitas'], 4),
  ('customs-brokerage', 'Customs Brokerage', '报关代理', 'Perantara Bea Cukai', 'Expert customs clearance and documentation services', '专业报关和文件服务', 'Layanan bea cukai dan dokumentasi ahli', 'FileText', ARRAY['Compliance expertise', 'Fast processing', 'Tariff optimization', 'Document management'], ARRAY['合规专业知识', '快速处理', '关税优化', '文件管理'], ARRAY['Keahlian kepatuhan', 'Pemrosesan cepat', 'Optimisasi tarif', 'Manajemen dokumen'], 5),
  ('supply-chain', 'Supply Chain Solutions', '供应链解决方案', 'Solusi Rantai Pasokan', 'End-to-end supply chain optimization and management', '端到端的供应链优化和管理', 'Optimisasi dan manajemen rantai pasokan end-to-end', 'Network', ARRAY['Real-time visibility', 'Cost reduction', 'Risk management', 'Efficiency improvement'], ARRAY['实时可见性', '成本降低', '风险管理', '效率提升'], ARRAY['Visibilitas real-time', 'Pengurangan biaya', 'Manajemen risiko', 'Peningkatan efisiensi'], 6);