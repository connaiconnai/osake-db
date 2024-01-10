import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Detail } from "../";

vi.mock("@functional/FetchData", () => ({
  UseFetchDataValue: vi.fn().mockReturnValue([
    {
      alchole_uid: "a66f6blqs51tf88naavvnuujp00n31g30neiyips",
      alchole_name: "独楽蔵 生もと純米 TAHITO",
      genre_id: "1",
      genre: "日本酒",
      image: "/images/tahito.jpg",
      labels: [
        {
          label: "杜の蔵",
          value: "福岡県久留米市",
        },
        {
          label: "米",
          value: "山田錦",
        },
        {
          label: "精米歩合",
          value: "65%",
        },
      ],
      reviews: [
        {
          author: "管理者",
          content:
            "香りは生もと由来のミルクキャンディーの様。滑らかな米の旨味、伸びのある酸を含むバナナを連想",
        },
      ],
    },
  ]),
}));

describe("Test alchole feature components", () => {
  test("Should show alchole data list", () => {
    render(
      <MemoryRouter
        initialEntries={["/detail/a66f6blqs51tf88naavvnuujp00n31g30neiyips"]}
      >
        <Routes>
          <Route path="detail/:uid" element={<Detail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("独楽蔵 生もと純米 TAHITO"));

    const label = screen.getByTestId("alchole-label-test");
    expect(label.textContent).toMatch("杜の蔵");
    expect(label.textContent).toMatch("福岡県久留米市");
    expect(label.textContent).toMatch("米");
    expect(label.textContent).toMatch("山田錦");
    expect(label.textContent).toMatch("精米歩合");
    expect(label.textContent).toMatch("65%");

    const review = screen.getByTestId("alchole-review-test");
    expect(review.textContent).toMatch("管理者");
    expect(review.textContent).toMatch("香りは生もと由来");
  });

  test("Should show not found", () => {
    render(
      <MemoryRouter initialEntries={["/detail/asdlfjwoiaj"]}>
        <Routes>
          <Route path="detail/:uid" element={<Detail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("not found"));
  });
});
