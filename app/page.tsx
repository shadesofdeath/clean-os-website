"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Shield, Package, Settings2, Github, Heart, Coffee, Star, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const versions = [
    {
      name: "Windows 11 24H2",
      version: "26100.1742",
      size: "4.66 GB",
      downloadUrl: "https://pixeldrain.com/api/file/8P3RzZUz?download"
    },
    {
      name: "Windows 10 22H2",
      version: "19045.4894",
      size: "4.58 GB",
      downloadUrl: "https://pixeldrain.com/api/file/u8xaXXXE?download"
    }
  ];

  const optimizations = [
    {
      icon: Shield,
      title: "Telemetri Devre Dışı",
      description: "Windows'un veri toplama ve Microsoft'a gönderme özellikleri devre dışı bırakıldı."
    },
    {
      icon: Package,
      title: "Gereksiz Uygulamalar Kaldırıldı",
      description: "Candy Crush, Xbox, OneDrive gibi gereksiz uygulamalar sistemden temizlendi."
    },
    {
      icon: Settings2,
      title: "Gereksiz Servisler Kapalı",
      description: "Sistem performansını etkileyen gereksiz Windows servisleri devre dışı bırakıldı."
    },
    {
      icon: X,
      title: "Reklam Servisleri Kapalı",
      description: "Windows'un reklam gösterme ve öneriler sunma özellikleri tamamen kaldırıldı."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <h1 className="text-lg font-bold">CleanOS</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/shadesofdeath/clean-os" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                <Github size={14} />
                <span className="hidden sm:inline text-xs">GitHub</span>
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <header className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
            <Star size={12} /> CleanOS
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Optimize Edilmiş Windows ISO'ları
          </h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Bloatware'lerden arındırılmış Windows kurulum dosyaları
          </p>
        </header>

        <section className="mb-8">
          <div className="flex justify-center gap-4">
            {versions.map((ver) => (
              <Card key={ver.version} className="w-full max-w-md hover:shadow-sm transition-all">
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <CardTitle className="text-base mb-1">{ver.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">Build {ver.version}</p>
                    </div>
                    <span className="text-xs font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                      {ver.size}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="w-full h-8 text-xs bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={ver.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Download size={14} className="mr-1.5" />
                      İndir
                    </a>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-base font-semibold mb-4 text-center">Yapılan Optimizasyonlar</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {optimizations.map((opt) => (
              <Card key={opt.title} className="hover:shadow-sm transition-all">
                <CardContent className="p-4 flex gap-3">
                  <opt.icon className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium mb-0.5">{opt.title}</h3>
                    <p className="text-xs text-muted-foreground">{opt.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center py-6 border-t">
          <h2 className="text-base font-semibold mb-4">Projeye Destek Ol</h2>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button asChild variant="outline" size="sm" className="h-8 text-xs">
              <a href="https://github.com/shadesofdeath/clean-os" className="flex items-center gap-1.5">
                <Github size={14} />
                GitHub'da Yıldızla
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="h-8 text-xs">
              <a href="https://github.com/shadesofdeath" className="flex items-center gap-1.5">
                <Heart size={14} className="text-red-500" />
                Sponsor Ol
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="h-8 text-xs">
              <a href="https://buymeacoffee.com/berkayay" className="flex items-center gap-1.5">
                <Coffee size={14} />
                Kahve Ismarla
              </a>
            </Button>
          </div>
        </section>
      </div>

      <footer className="border-t py-4">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          <p>CleanOS, Microsoft Corporation ile bağlantılı değildir.</p>
          <p className="mt-0.5">ShadesOfDeath tarafından ❤️ ile yapıldı</p>
        </div>
      </footer>
    </main>
  );
}