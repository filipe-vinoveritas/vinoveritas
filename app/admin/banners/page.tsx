"use client"

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Image as ImageIcon, Move, Trash2 } from "lucide-react";
import { BannerDialog } from "@/components/admin/banner-dialog";

const banners = [
  {
    id: 1,
    title: "Coleção Premium",
    description: "Descubra nossa seleção exclusiva",
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    active: true
  },
  {
    id: 2,
    title: "Vinhos Raros",
    description: "Safras únicas e edições limitadas",
    image: "https://images.pexels.com/photos/3019019/pexels-photo-3019019.jpeg",
    active: true
  },
  // Add more banners as needed
];

export default function BannersPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Banners</h1>
          <p className="text-gray-500">Gerencie os banners do site</p>
        </div>
        <Button 
          onClick={() => {
            setSelectedBanner(null);
            setIsDialogOpen(true);
          }}
          className="bg-burgundy hover:bg-burgundy-light"
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Banner
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <Card key={banner.id} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 space-x-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/80 hover:bg-white"
                  onClick={() => {
                    setSelectedBanner(banner);
                    setIsDialogOpen(true);
                  }}
                >
                  <ImageIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/80 hover:bg-white"
                >
                  <Move className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/80 hover:bg-white text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg">{banner.title}</h3>
              <p className="text-gray-500 text-sm">{banner.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  banner.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {banner.active ? 'Ativo' : 'Inativo'}
                </span>
                <Button variant="link" className="text-burgundy hover:text-burgundy-light">
                  Editar
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <BannerDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        banner={selectedBanner}
      />
    </div>
  );
}