package com.example.ricar.myapplication;

import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;

import java.util.ArrayList;
import android.content.Context;
import android.widget.Button;
import android.widget.TextView;

import org.w3c.dom.Text;

public class HorarioListAdapter extends ArrayAdapter<Hora> {

    private static final String TAG = "HorarioListAdapter";
    private Context mContext;
    private int mResource;

    public HorarioListAdapter(Context context, int resource, ArrayList<Hora> objects)
    {
        super( context, resource, objects);
        mContext = context;
        mResource = resource;
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
        String hora = getItem(position).getHora();

        LayoutInflater inflater = LayoutInflater.from(mContext);
        convertView = inflater.inflate(mResource, parent, false);

        TextView hor = (TextView)convertView.findViewById(R.id.textView1);
        Button lun = (Button)convertView.findViewById(R.id.Lun);

        lun.setBackgroundColor(convertView.getResources().getColor(R.color.colorRed));

        hor.setText(hora);

        return  convertView;
    }
}
